console.log('hello');

renderPortSection();

function renderPortSection() {
    var projects = getProjects();
    var strHTML = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a onclick="renderportfolio('${project.title}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${project.url}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.title}</h4>
          <p class="text-muted">${project.desc}</p>
        </div>
      </div>`
    })
    $('.port-section').html(strHTML);
}

function renderportfolio(title) {
    var currProj = getProjByTitle(title);
    // $('.game-div').load(`./projs/${currProj.name}/index.html`);
    $('.game-div').html(`<iframe width="900px" height="820px" src="./projs/${currProj.name}/index.html">`);
    $('.modal-proj-name').text(currProj.title);
    $('.modal-short-desc').text(currProj.desc);
    $('.modal-full-desc').text(currProj.long);
    $('.modal-img').attr('src', currProj.url);
    $('.modal-date').text(currProj.date);
    $('.modal-type').text(currProj.type);
}

function onMailSubmit() {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=guykap4@example.com&su=${$('#subject').val()}&body=${$('#body').val()}`, "_blank")
    $('#email').val('')
    $('#subject').val('')
    $('#body').val('')
}