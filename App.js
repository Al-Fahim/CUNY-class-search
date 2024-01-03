const schoolCode = 'QC';
const subject = 'CSCI';

// Function to fetch CSCI classes from Queens College
async function fetchCSCIClasses() {
  try {
    const response = await fetch(`http://cunyfirstapi.herokuapp.com/api/${schoolCode}/${subject}`);
    
    if (!response.ok) {
      throw new Error('Unable to fetch CSCI classes.');
    }
    
    const classes = await response.json();
    return classes;
  } catch (error) {
    console.error(error);
  }
}

// Usage example
fetchCSCIClasses()
  .then(classes => {
    console.log(classes);
    // Handle the retrieved classes data here
  });
