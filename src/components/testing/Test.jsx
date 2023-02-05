import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import { PortableText } from '@portabletext/react';
function Test() {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    const query = `*[_type == "author"]{
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

    client
      .fetch(query)
      .then((data) => setGetData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {getData?.map((x) => (
        <div className="" key={x._id}>
          <div className="">
            {x.work.map((work, index) => (
              <div className="" key={work.title}>
                {work.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Test;
