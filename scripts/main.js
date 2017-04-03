$(() => {
  // contactInfo, dataEng & dataEsp from './info.js'
  var data = dataEng,

  loadContactDetails = () => {
    setTitle('contactDetails')
    Object.keys(contactInfo)
          .forEach(key => $(`#${key}`).text(contactInfo[key]));
  },

  loadSummary = obj => {
    setTitle('summary');
    var content = '';
    obj.content.forEach(p =>  content += `<p>${p}</p>`);
    $('#summary').append(content);
  },

  loadEducation = obj => {
    setTitle('education');
    $(`#school`).text(obj.school + ' |');
    $(`#period`).text(obj.period);
    $(`#major`).text(obj.major);
  },

  loadWorkExperience = obj => {
    setTitle('workExperience');
    var content = '';
    obj.content.forEach(work => content += `<p>
        <span class='primary'>${work.position} |</span>
        ${work.company} |
        <span class='secondary'>${work.period}</span>
      </p>
      <p>
        <span id='activities'>${work.activities}</span>
        (<span id='tools'>${work.tools}</span>)
      </p>`
    );
    $('#workExperience').append(content);
  },

  loadLanguages = obj => {
    setTitle('languages');
    var content = '';
    obj.content.forEach(lang => content += `<p>
        <span class='primary'>${lang.language} |</span>
        ${lang.level}
      </p>`
    );
    $('#languages').append(content);
  },

  loadTechnologies = obj => {
    setTitle('technologies');
    var content = '';
    obj.content.forEach(tech => content += `<p>${tech}</p>`);
    $('#technologies').append(content);
  },

  loadCertifications = obj => {
    setTitle('certifications');
    var content = '';
    obj.content.forEach(cert => content += `<p>
        ${cert.name} |
        <span class='secondary'>${cert.date}</span>
      </p>`);
    $('#certifications').append(content);
  },

  setTitle = section => {
    $(`#${section} > h3`).text(data[section].title);
  };

  loadContactDetails();
  loadSummary(data.summary);
  loadEducation(data.education);
  loadWorkExperience(data.workExperience);
  loadLanguages(data.languages);
  loadTechnologies(data.technologies);
  loadCertifications(data.certifications);
});
