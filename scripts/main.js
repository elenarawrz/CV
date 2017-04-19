$(() => {
  // contactInfo, dataEng & dataEsp from './info.js'
  var data = dataEng,

  setTitle = section => {
    $(`#${section}`).prepend(`<h3>${data[section].title}</h3>`);
  },

  load = (section, callback, parent) => {
    setTitle(section);
    content = data[section].content.reduce(callback, '');
    $(`#${parent || section}`).append(content);
  },

  loaders = [
    () => {
          //setTitle('contactDetails');
          Object.keys(contactInfo)
                .forEach(key => $(`#${key}`).text(contactInfo[key]));
        },
    () => load('summary', (acc, p) =>  acc += `<p>${p}</p>`),
    () => load('workExperience', (acc, work) => acc += `<div class='work'>
        <p>
          <span class='primary'>${work.position}&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          ${work.company}&nbsp;&nbsp;|&nbsp;&nbsp;
          <span class='secondary'>${work.period}</span>
        </p>
        <p>
          <span id='activities'>${work.activities}</span>
          (<span id='tools'>${work.tools}</span>)
        </p></div>`),
    () => {
          setTitle('education');
          $(`#school`).html(data.education.school + '&nbsp;&nbsp;|&nbsp;&nbsp;');
          $(`#period`).text(data.education.period);
          $(`#major`).text(data.education.major);
        },
    () => load('languages', (acc, lang) => acc += `<li>
          ${lang.language} |
          <span class='secondary'>${lang.level}</span>
        </li>`, 'langList'),
    () => load('technologies', (acc, tech) => acc += `<li>${tech}</li>`, 'techList'),
    () => load('certifications', (acc, cert) => acc += `<p>
        ${cert.name}<br />
        <span class='secondary'>${cert.date}</span>
      </p>`)
  ];

  loaders.forEach(loader => loader());
});
