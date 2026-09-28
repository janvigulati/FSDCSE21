const form = document.querySelector("#request-form");
const requestList = document.querySelector("#request-list");
const formMessage = document.querySelector("#form-message");
const submitButton = document.querySelector("#submit-button");
const submitLabel = document.querySelector("#submit-label");
const cancelEditButton = document.querySelector("#cancel-edit");
const requestCount = document.querySelector("#request-count");
let editingId = null;

function showMessage(message, success = false) {
  formMessage.textContent = message;
  formMessage.classList.toggle("success", success);
}

async function apiRequest(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "The request could not be completed.");
  return data;
}

function makeTextElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function renderRequest(request) {
  const card = document.createElement("article");
  card.className = "request-card";
  card.dataset.priority = request.priority;

  const main = document.createElement("div");
  main.className = "request-main";
  const topline = document.createElement("div");
  topline.className = "request-topline";
  topline.append(makeTextElement("span", "request-category", request.category));
  const priority = makeTextElement("span", "priority", `${request.priority} priority`);
  priority.dataset.priority = request.priority;
  topline.append(priority);

  main.append(topline, makeTextElement("p", "request-description", request.description));
  const meta = document.createElement("div");
  meta.className = "request-meta";
  meta.append(
    makeTextElement("span", "", request.studentName),
    makeTextElement("span", "", request.email),
    makeTextElement("span", "", formatDate(request.createdAt))
  );
  main.append(meta);

  const actions = document.createElement("div");
  actions.className = "request-actions";
  const editButton = makeTextElement("button", "icon-button", "✎");
  editButton.type = "button";
  editButton.title = "Edit request";
  editButton.setAttribute("aria-label", `Edit request from ${request.studentName}`);
  editButton.addEventListener("click", () => beginEdit(request));
  const deleteButton = makeTextElement("button", "icon-button delete", "×");
  deleteButton.type = "button";
  deleteButton.title = "Delete request";
  deleteButton.setAttribute("aria-label", `Delete request from ${request.studentName}`);
  deleteButton.addEventListener("click", () => deleteRequest(request));
  actions.append(editButton, deleteButton);
  card.append(main, actions);
  return card;
}

async function loadRequests() {
  requestList.replaceChildren(makeTextElement("p", "list-state", "Loading requests…"));
  try {
    const requests = await apiRequest("/api/requests");
    requestCount.textContent = String(requests.length);
    if (requests.length === 0) {
      requestList.replaceChildren(makeTextElement("p", "list-state", "No requests yet. Your first submission will appear here."));
      return;
    }
    requestList.replaceChildren(...requests.map(renderRequest));
  } catch (error) {
    requestList.replaceChildren(makeTextElement("p", "list-state", error.message));
  }
}

function beginEdit(request) {
  editingId = request.id;
  for (const field of form.elements) {
    if (field.name && Object.hasOwn(request, field.name)) field.value = request[field.name];
  }
  document.querySelector("#form-title").textContent = "Update your request";
  submitLabel.textContent = "Save changes";
  cancelEditButton.hidden = false;
  showMessage(`Editing request from ${request.studentName}.`);
  document.querySelector("#studentName").focus();
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetForm() {
  form.reset();
  editingId = null;
  document.querySelector("#form-title").textContent = "What can we help with?";
  submitLabel.textContent = "Send request";
  cancelEditButton.hidden = true;
  showMessage("");
}

async function deleteRequest(request) {
  if (!window.confirm(`Delete the request from ${request.studentName}?`)) return;
  try {
    await apiRequest(`/api/requests/${encodeURIComponent(request.id)}`, { method: "DELETE" });
    if (editingId === request.id) resetForm();
    await loadRequests();
  } catch (error) {
    showMessage(error.message);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const payload = Object.fromEntries(new FormData(form).entries());
  const isEditing = editingId !== null;
  submitButton.disabled = true;
  showMessage("");
  try {
    await apiRequest(isEditing ? `/api/requests/${encodeURIComponent(editingId)}` : "/api/requests", {
      method: isEditing ? "PUT" : "POST",
      body: JSON.stringify(payload)
    });
    resetForm();
    showMessage(isEditing ? "Request updated." : "Request submitted.", true);
    await loadRequests();
  } catch (error) {
    showMessage(error.message);
  } finally {
    submitButton.disabled = false;
  }
});

cancelEditButton.addEventListener("click", resetForm);
document.querySelector("#refresh-button").addEventListener("click", loadRequests);
loadRequests();