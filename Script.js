let jobsData = [];

fetch('jobs.json')
.then(response => response.json())
.then(data => {
  jobsData = data;
  displayJobs(jobsData);
});

function displayJobs(jobs) {
  let jobsHTML = "";

  jobs.forEach(job => {
    jobsHTML += `
      <div class="job">
        <h3>${job.title}</h3>
        <p>${job.location}</p>
        <p>${job.salary}</p>
        <small>${job.category}</small>
      </div>
    `;
  });

  document.getElementById("jobs").innerHTML = jobsHTML;
}

function filterJobs(category) {
  if (category === "all") {
    displayJobs(jobsData);
  } else {
    const filtered = jobsData.filter(job => job.category === category);
    displayJobs(filtered);
  }
}

document.getElementById("searchInput").addEventListener("keyup", function() {
  const value = this.value.toLowerCase();
  const filtered = jobsData.filter(job =>
    job.title.toLowerCase().includes(value)
  );
  displayJobs(filtered);
});
