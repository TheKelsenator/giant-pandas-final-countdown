import 'tailwindcss/tailwind.css';

const boxes = [
    { text: 'Box 1', bgColor: 'bg-gray-500' },
    { text: 'Box 2', bgColor: 'bg-gray-500' },
    { text: 'Box 3', bgColor: 'bg-gray-500' },
    { text: 'Box 4', bgColor: 'bg-gray-500' },
  ];

const boxContainer = document.createElement('div');
boxContainer.classList.add('grid', 'grid-cols-2', 'md:grid-cols-4', 'gap-4');

boxes.forEach(box => {
    const boxElement = document.createElement('div');
    boxElement.classList.add('p-4', 'rounded-lg', 'text-white', box.bgColor);
    boxElement.innerText = box.text;
    boxContainer.appendChild(boxElement);
  });

  document.body.appendChild(boxContainer);