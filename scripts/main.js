$(() => {
  // contactInfo, dataEng & dataEsp from './info.js'
  var data = dataEng,

  setTitle = section => {
    $(`#${section} > h3`).text(data[section].title);
  },

  load = (section, callback) => {
    setTitle(section);
    content = data[section].content.reduce(callback, '');
    $(`#${section}`).append(content);
  },

  loaders = [
    () => {
          setTitle('contactDetails');
          Object.keys(contactInfo)
                .forEach(key => $(`#${key}`).text(contactInfo[key]));
        },
    () => load('summary', (acc, p) =>  acc += `<p>${p}</p>`),
    () => load('workExperience', (acc, work) => acc += `<p>
          <span class='primary'>${work.position} |</span>
          ${work.company} |
          <span class='secondary'>${work.period}</span>
        </p>
        <p>
          <span id='activities'>${work.activities}</span>
          (<span id='tools'>${work.tools}</span>)
        </p>`),
    () => {
          setTitle('education');
          $(`#school`).text(data.education.school + ' |');
          $(`#period`).text(data.education.period);
          $(`#major`).text(data.education.major);
        },
    () => load('languages', (acc, lang) => acc += `<p>
          <span class='primary'>${lang.language} |</span>
          ${lang.level}
        </p>`),
    () => load('technologies', (acc, tech) => acc += `<p>${tech}</p>`),
    () => load('certifications', (acc, cert) => acc += `<p>
        ${cert.name} |
        <span class='secondary'>${cert.date}</span>
      </p>`)
  ];

  loaders.forEach(loader => loader());
});
