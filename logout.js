// Function to display the logout confirmation
function showLogoutConfirmation() {
    const confirmationContainer = document.createElement('div');
    confirmationContainer.style.position = 'fixed';
    confirmationContainer.style.top = '0';
    confirmationContainer.style.left = '0';
    confirmationContainer.style.width = '100%';
    confirmationContainer.style.height = '100%';
    confirmationContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    confirmationContainer.style.display = 'flex';
    confirmationContainer.style.justifyContent = 'center';
    confirmationContainer.style.alignItems = 'center';
    confirmationContainer.style.zIndex = '1000';

    const confirmationBox = document.createElement('div');
    confirmationBox.style.backgroundColor = 'white';
    confirmationBox.style.padding = '20px';
    confirmationBox.style.borderRadius = '8px';
    confirmationBox.style.textAlign = 'center';
    confirmationBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    const message = document.createElement('p');
    message.textContent = 'Are you sure you want to logout?';
    confirmationBox.appendChild(message);

    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.style.margin = '10px';
    yesButton.style.padding = '10px 20px';
    yesButton.style.backgroundColor = '#4CAF50';
    yesButton.style.color = 'white';
    yesButton.style.border = 'none';
    yesButton.style.borderRadius = '4px';
    yesButton.style.cursor = 'pointer';
    yesButton.addEventListener('click', () => {
        alert('You have logged out.');
        document.body.removeChild(confirmationContainer);
    });
    confirmationBox.appendChild(yesButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.style.margin = '10px';
    cancelButton.style.padding = '10px 20px';
    cancelButton.style.backgroundColor = '#f44336';
    cancelButton.style.color = 'white';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '4px';
    cancelButton.style.cursor = 'pointer';
    cancelButton.addEventListener('click', () => {
        document.body.removeChild(confirmationContainer);
    });
    confirmationBox.appendChild(cancelButton);

    confirmationContainer.appendChild(confirmationBox);
    document.body.appendChild(confirmationContainer);
}

// Attach the event listener to the logout link
document.getElementById('logoutLink').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    showLogoutConfirmation();
});