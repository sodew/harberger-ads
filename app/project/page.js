// // import React, { useState, useEffect } from 'react';
// import { useClient } from 'react';
// import ProjectData from './ProjectData';

// export default function Project() {
//     return (
//         <div>
//             <p>hello world</p>
//             {/* <ProjectData use={useClient} /> */}
//         </div>
//     );
// }

'use client'
import React, { useState, useEffect } from 'react';

export default function ProjectData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('/api/user-details');
            const result = await response.json();
            setData(result);
            setLoading(false);
          } catch (error) {
            console.log('helloooo')
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        }
        fetchData();
      }, []);
    
      if (loading) {
        return <p>Loading...</p>;
      }
    
      return (
        <div>
          <p>Balance: {data.balance}</p>
          <p>Project Name: {data.project.name}</p>
          <p>Project Description: {data.project.description}</p>
          {/* <h3>Sponsors:</h3>
          <ul>
            {data.sponsors.map((sponsor, index) => (
              <li key={index}>
                <p>Name: {sponsor.name}</p>
                <p>Owner: {sponsor.owner}</p>
                <img src={sponsor.logo} alt={sponsor.name} />
                <p>Link: <a href={sponsor.link}>{sponsor.link}</a></p>
                <p>Set Price: {sponsor.setPrice}</p>
              </li>
            ))}
          </ul> */}
        </div>
      );
    }
    

    // useEffect(() => {
    //     // Define the async function
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('/api/user-details');
    //             const jsonData = await response.json();
    //             console.log(jsonData)
    //             setData(jsonData);
    //         } catch (err) {
    //             console.error(`Error fetching data: ${err}`);
    //         }
    //     }

    //     // Call the async function
    //     fetchData();
    // }, []); 

    // return data ? (
    //     <div>
    //         <p>Balance: {data.balance}</p>
    //         <p>Project Name: {data.project.name}</p>
    //         <p>Project Description: {data.project.description}</p>
    //     </div>
    // ) : (
    //     <p>Loading...</p>
    // );
// }
