let container = document.getElementById("slot");

const tRow = () => {
    let row = "";
    let arrayLength = usersList.length - 1;
    for (i = 0; i <= arrayLength; i++) {
        let user = usersList[i];
        row += `<tr>
        <td>${i + 1}</td>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td>${user.company}</td>
        <td>${user.date_entry}</td>
        <td>${user.org_num}</td>
        <td>${user.address_1}</td>
        <td>${user.city}</td>
        <td>${user.zip}</td>
        <td>${user.geo}</td>
        <td>${user.pan}</td>
        <td>${user.pin}</td>
        <td>${user.id}</td>
        <td>${user.status}</td>
        <td>${user.fee}</td>
        <td>${user.guid}</td>
        <td>${user.date_exit}</td>
        <td>${user.date_first}</td>
        <td>${user.date_recent}</td>
        <td>${user.url}</td>
        </tr>`;
    }
    return row;
}

const thead = () => {
    return `<thead>
    <tr>
    <th>S.NO</th>
    <th>NAME</th>
    <th>PHONE</th>
    <th>EMAIL</th>
    <th>COMPANY</th>
    <th>DATE_ENTRY</th>
    <th>ORG_NUM</th>
    <th>ADDRESS_1</th>
    <th>CITY</th>
    <th>ZIP</th>
    <th>GEO</th>
    <th>PAN</th>
    <th>PIN</th>
    <th>ID</th>
    <th>STATUS</th>
    <th>FEE</th>
    <th>GUIDE</th>
    <th>DATE_EXIT/th>
    <th>DATE_FIRST</th>
    <th>DATE_RECET</th>
    <th>URL</th>
    </tr>
    </thead>`;

}

const tbody = () => {
    return `<tbody>${tRow()}</tbody>`;
}

const tbl = () => {
    return `<table>${thead()}${tbody()}</table>`;
}
container.innerHTML = tbl();
