// UserProfileCard.js
import React from 'react';

function UserProfileCard({ user }) {
  return (
    <div className="flex justify-center items-center  h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(https://img.freepik.com/free-vector/white-background-gradient-modern-abstract-design-wave_343694-2337.jpg)` }}>
      <div className="w-300 h-64 rounded-xl bg-white  flex  shadow-lg hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url(https://thumbs.dreamstime.com/b/id-card-background-design-134085323.jpg)` }}>
        <div className='flex p-4  '>
            <div className='mr-6 flex justify-center items-center  '>
              <img className="w-40 h-40 rounded-lg" src={user.picture.large} alt="User" />
            </div>
            <div className=' pl-6 border-l-2 border-blue-900 space-y-6' >
              <div className='mt-10'>
                <h2 className="text-3xl block font-semibold text-gray-800">{`Name- ${user.name.first} ${user.name.last}`}</h2>
              </div>
              <div>
                <p className=" text-xl text-gray-600">{`Gender- ${user.gender.charAt(0).toUpperCase(0)}${user.gender.slice(1)}`}</p>
              </div>
              <div>
                <p className="text-lg text-gray-600 mt-2">{`Phone no- ${user.phone}`}</p>
              </div>
            </div>
        </div>
        
      </div>
    </div> 
  );
}

export default UserProfileCard;
