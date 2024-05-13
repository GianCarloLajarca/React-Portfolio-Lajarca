import React from 'react';
import useQueryData from '../../../../custom-hook/useQueryData';

const CertificationsHonors = () => {

    const {
        isLoading,
        isFetching,
        error,
        data: honor,
      } = useQueryData(
       "/v1/honor", // endpoint
       "get", // method
        "honor", // key
      );

  return (
    <div className='honors-grid grid grid-cols-3 gap-7 py-20 bg-darkblue'>
        {honor?.data.map((item, key) => (
        <div className='honor-card pb-44 pt-5 px-10' key={key}>
            <div className='honor-image bg-primary'>
            <a href={item.honor_image} data-lightbox="image-1" data-title={item.honor_title}><img src={item.honor_image} alt="" className=' object-cover'/></a>
            </div>
            <div className='honor-details flex flex-col gap-5 mt-5'>
                <div className='honor-title'>
                    <h3 className='text-accent text-xl'>{item.honor_title}</h3>
                </div>
                   <div className='honor-date'>
                    <h4 className='text-stone-400'>{item.honor_date}</h4>
                  </div>  

                <div className='honor-school'>
                    <h3 className='text-stone-400'>{item.honor_giver}</h3>
                </div>      

            </div>    
        </div>
        ))}  
    </div>
  )
}

export default CertificationsHonors