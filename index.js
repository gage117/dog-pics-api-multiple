function fetchDogImages(num) {
  fetch('https://dog.ceo/api/breeds/image/random/' + num)
    .then(response => response.json())
    .then(responseJson => generateImgsString(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function generateImgHtml(obj) {
    return `
        <li>
            <img src='${obj}' alt='A cute dog'>
        </li>
    `
}

const generateImgsString = function (imagesObj) {
    const images = imagesObj.message.map((item) => generateImgHtml(item));
    let finishedString = images.join('');
    console.log(finishedString);
    $('.right-side').html(finishedString);
  };

function handleFormSubmit() {
  $('form').submit(event => {
    event.preventDefault();
    let inputNum = $('.input-number').val();
    checkInputNum(inputNum);
    fetchDogImages(inputNum);
  });
}

function checkInputNum(num) {
    if (num < 3) {
        throw new Error(alert('Please pick a number of 3 or greater'));
    }
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  handleFormSubmit();
});