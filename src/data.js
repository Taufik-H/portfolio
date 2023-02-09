export const queryAuthor = `*[_type == "author"]{
  _id,
  name,
  lastname,
  country,
  image{
    asset->{
      _id,
      url
    }
  },
  work[]{_id,title},
  skills[]->{
    _id,
    title,
    image{
      asset->{
        _id,
        url
      }
    }
  }
}`;
export const queryAbout = `*[_type == "author"]{
  about[]{
    ...,
  }}`;
export const queryEcperience = `*[_type == "experience"]`;
export const querySkills = `*[_type == "skills"]{
  ...
 }`;
export const queryWork = `*[_type == "project"]{
  ...,
  tool[]->,
  tag[]->,
  image{
    asset->{
      url
    }
  }
  }`;
export const queryTestimonial = `*[_type == "testimonial"]{
  ...,
  image{
    asset->{
      url
    }
  }
}`;
