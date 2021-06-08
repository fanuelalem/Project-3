import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const UpdateProfile = () => {
  const [file, setFile] = useState();

  const handleRequest = () => {
    const data = new FormData();
    data.append('file', file);

    axios.post('https://httpbin.org/anything', data).then(response => {
      console.log(response);
    });
  };

  return (
    <div>
      <div>
        <Helmet>
          <style>{'body { background-color:#532f8c;  }'}</style>
        </Helmet>

        <div
          style={{
            margin: '80px 20px 0px 20px',
            backgroundColor: 'whitesmoke',
            minHeight: '80vh',
          }}
        >
          <h2
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '40px 0 0 0',
            }}
          >
            upload file
          </h2>
          <form>
            <input
              onChange={event => {
                const file = event.target.files[0];
                setFile(file);
              }}
              type="file"
            ></input>

            <button className="axiosRequestImages" onClick={handleRequest}>
              {' '}
              axios request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
