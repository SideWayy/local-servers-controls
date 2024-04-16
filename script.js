function copyAlpha() {
    let textToCopy = document.getElementById("alphaIP").innerText;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Text copied to clipboard successfully!");
        })
        .catch(err => {
            console.error('Unable to copy text: ', err);
        });
}
function startAlpha() {
  fetch("/startAlpha")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
function restartAlpha() {
  fetch("/restartAlpha")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
function stopAlpha() {
  fetch("/stopAlpha")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function copyBeta() {
  let textToCopy = document.getElementById("betaIP").innerText;

  navigator.clipboard.writeText(textToCopy)
      .then(() => {
          alert("Text copied to clipboard successfully!");
      })
      .catch(err => {
          console.error('Unable to copy text: ', err);
      });
}
function startBeta() {
  fetch("/startBeta")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
function restartBeta() {
  fetch("/restartBeta")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
function stopBeta() {
  fetch("/stopBeta")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
