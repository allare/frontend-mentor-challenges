const jobLists = document.querySelector('.lists');
const filterLists = document.querySelector('.filter-lists');
const filterSection = document.querySelector('.filter-desktop');
const clearBtn = document.querySelector('.clear');

getJobList();


async function getJobList(){
    const res = await fetch("./data.json");
    const jobs = await res.json();

    showJobList(jobs);
}

function showJobList(jobs){
    jobLists.innerHTML = "";

    jobs.forEach(job => {
        jobLists.innerHTML += `
        <div class="list list-${job.id}">
        <div class="job-description">
        <div class="company-logo">
          <img src="${job.logo}" alt="${job.company}">
        </div>
          <div class="job-content">
            <div class="top-section">
              <h4 class="company-name">${job.company}</h4>
            <div class="filters">
              <p class="filter-new" style=${(job.new) ? "display: block": "display:none" }>New!</p>
              <p class="filter-featured" style=${(job.featured) ? "display: block": "display:none"}>Featured</p>
            </div>
          </div>
            <div class="job-info">
              <h2 class="title">${job.position}</h2>
              <div class="more-info">
                <p class="date-posted">${job.postedAt}</p><span>.</span>
                <p class="job-type">${job.contract}</p><span>.</span>
                <p class="location">${job.location}</p>
              </div>
            </div>
          </div>
        </div>
      
        <div class="filter-tablets">
          <ul class="tablets">
            <li class="tablet" >${job.role}</li>
            <li class="tablet">${job.level}</li>
            ${ (job.tools) ? getTools(job.tools) : ""}
            ${ (job.languages) ? getLanguages(job.languages) : ""}
          </ul>
        </div>
      </div>`; 
    });
    const list = document.querySelectorAll('.list');
    const Li = document.querySelectorAll('.tablet');
    Li.forEach(item => {
        item.addEventListener('click', (e) => {
            filterSection.style.display = "flex";
            showFilterItems(item);
            showFilterJobList(item, list);
        } );
    });

}

function getLanguages(languages) {
    return `
    ${ languages.map( (lang) => {
      return `<li class="tablet">${lang}</li>`
    }).join("")}
    `
  }

  function getTools(tools) {
   return `
   ${ tools.map( (tool) => {
     return `<li class="tablet">${tool}</li>`
   }).join("")}
   `
  }

  function showFilterItems(item){
        filterLists.innerHTML += `
        <li class="filter-item">
                              <p>${item.innerText}</p>
                              <div class="close-btn">
                              <a href="#">
                              <img src="images/icon-remove.svg" alt="close icon"></a>
                               </div>
                               </li>`;

    const closeBtn = document.querySelectorAll('.close-btn');
    closeFilteredItems(closeBtn);
  }

  function closeFilteredItems(closeBtn){
        closeBtn.forEach(button => {
            button.addEventListener('click', () =>{
                button.parentElement.remove();
            });
        });
  }


  clearBtn.addEventListener('click', ()=>{
      filterSection.style.display = "none";
      filterLists.innerHTML = "";
  });


  function showFilterJobList(item, list){
    
  }