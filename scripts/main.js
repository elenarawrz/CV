$(() => {
  // contactInfo, dataEng & dataEsp from './info.js'
  var data = dataEng, content,

  setTitle = section => {
    $(`#${section} > h3`).text(data[section].title);
  },

  load = (section, callback) => {
    setTitle(section);

    content = '';
    data[section].content.forEach(callback);

    $(`#${section}`).append(content);
  },

  loaders = [
    () => {
          setTitle('contactDetails');
          Object.keys(contactInfo)
                .forEach(key => $(`#${key}`).text(contactInfo[key]));
        },
    () => load('summary', p =>  content += `<p>${p}</p>`),
    () => load('workExperience', work => content += `<p>
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
    () => load('languages', lang => content += `<p>
          <span class='primary'>${lang.language} |</span>
          ${lang.level}
        </p>`),
    () => load('technologies', tech => content += `<p>${tech}</p>`),
    () => load('certifications', cert => content += `<p>
        ${cert.name} |
        <span class='secondary'>${cert.date}</span>
      </p>`)
  ];

  loaders.forEach(loader => loader());
});
