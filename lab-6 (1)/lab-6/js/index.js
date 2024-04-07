/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/

async function getContacts() {
  try {
      const response = await fetch('./public/data/contacts.json');
      const data = await response.json();
      console.log(data); // Logging out the fetched data
      renderContacts(data); // Calling renderContacts function with the fetched data
  } catch (error) {
      console.error('Error fetching contacts:', error);
  }
}

function renderContacts(contacts) {
  const contactsDiv = document.getElementById('contacts');
  contactsDiv.innerHTML = ''; // Clearing previous content
  contacts.forEach(contact => {
      const contactItem = document.createElement('div');
      contactItem.classList.add('list-group-item');
      contactItem.innerHTML = `
          <h5 class="mb-1">${contact.name}</h5>
          <p class="mb-1">${contact.email}</p>
      `;
      contactsDiv.appendChild(contactItem);
  });
}

// Call the getContacts function to initiate data fetching and rendering
getContacts();