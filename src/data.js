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
export const queryAbour = `*[_type == "testimonial"]`;
export const querySkills = `*[_type == "testimonial"]`;
export const queryWork = `*[_type == "testimonial"]`;
export const queryTestimonial = `*[_type == "testimonial"]{
  ...,
  image{
    asset->{
      url
    }
  }
}`;
