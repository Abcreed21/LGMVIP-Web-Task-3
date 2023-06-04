// solve

const enrollForm = document.getElementById('enroll-form');
const enrollTable = document.getElementById('enroll-table');

enrollForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const imageLink = document.getElementById('image-link').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = document.querySelectorAll('input[name="skills[]"]:checked');
    const skillsArray = Array.from(skills).map(skill => skill.value);

    const newRow = document.createElement('tr');
    const descriptionColumn = document.createElement('td');
    const descriptionList = document.createElement('ul');
    const nameListItem = document.createElement('li');
    const emailListItem = document.createElement('li');
    const websiteListItem = document.createElement('li');
    const genderListItem = document.createElement('li');
    const skillsListItem = document.createElement('li');
    const imageColumn = document.createElement('td');
    const img = document.createElement('img');
    // solve the error
    img.src = imageLink;
    nameListItem.textContent = `Name: ${name}`;
    emailListItem.textContent = `Email: ${email}`;
    websiteListItem.textContent = `Website: ${website}`;
    genderListItem.textContent = `Gender: ${gender}`;
    skillsListItem.textContent = `Skills: ${skillsArray.join(', ')}`;

    descriptionList.appendChild(nameListItem);
    descriptionList.appendChild(emailListItem);
    descriptionList.appendChild(websiteListItem);
    descriptionList.appendChild(genderListItem);
    descriptionList.appendChild(skillsListItem);
    descriptionColumn.appendChild(descriptionList);
    newRow.appendChild(descriptionColumn);

    imageColumn.appendChild(img);
    newRow.appendChild(descriptionColumn);
    newRow.appendChild(imageColumn);
    enrollTable.appendChild(newRow);
    enrollForm.reset();
});
