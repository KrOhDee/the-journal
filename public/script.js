document.querySelector('#filter').addEventListener('keyup', async (e) => {
  const text = e.target.value.toLowerCase();
  const rows = document.querySelectorAll('#book-list tr');

  rows.forEach((row) => {
    const title = row.querySelector('td:first-child').textContent.toLowerCase();

    if (title.indexOf(text) !== -1) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener('click', (e) => {
    const id = e.target.dataset.doc;
    const endpoint = `/books/${id}`;

    fetch(endpoint, {
      method: 'DELETE',
      body: JSON.stringify({ id: e.target.dataset.doc }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        const bookElement = document.getElementById(id);
        bookElement.remove();
      })
      .catch((err) => console.log(err));
  });
});
