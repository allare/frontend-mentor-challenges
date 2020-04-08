

fetch('./data.json')
.then(res => {
    return res.json();
})
.then(data => {
    getJobList(data);
})
.catch(err => {
    console.log(err);
});




     function getJobList(jobs) {
        let lists = document.querySelector('.lists');
        jobs.forEach(job =>{
            const list =   `<div class="list list-${job.id}">
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
      </div>
        `;
        lists.innerHTML += list;
        });
        filterList();
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

    
     function filterList(){
       const filterListsUl = document.querySelector('.filter-list');
       const filterItems = document.querySelectorAll('.tablet');
       const filterDiv = document.querySelector('.filter-desktop');

       for(let i = 0; i < filterItems.length; i++){
         filterItems[i].addEventListener('click', function(){
           filterDiv.style.display = "block";
           filterListsUl.innerHTML += `<li class="filter-item">
                              <p>${filterItems[i].innerText}</p>
                              <div class="close-btn">
                              <a href="#">
                              <img src="images/icon-remove.svg" alt="close icon"></a>
                               </div>
                               </li>`
                               closeDiv();
         });
         closeFilterDiv(filterDiv);
       }
       return filterListsUl;
     }
     
       
      function closeDiv(){
        const closeBtn = document.querySelectorAll('.close-btn');
        for(let i = 0; i < closeBtn.length; i++){
          closeBtn[i].addEventListener('click', function(){
             return closeBtn[i].parentElement.style.display = "none";
          });
        }
       

      }

      function closeFilterDiv(filterDiv){
        const clearBtn = document.querySelector('.clear');
        const filterListsUl = document.querySelector('.filter-list');

        return clearBtn.addEventListener('click', function(){
          filterDiv.style.display = "none";
          filterListsUl.innerHTML = "";
        });
      }