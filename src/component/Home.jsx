import React from 'react'
import Loader from './Loader'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = ({images , loader,saved,setSaved}) => {
    const saveImage = (img)=>{

        let flag=true;
        if(saved !== null && saved.length>0){
            for(let i=0; i<saved.length;i++){
                if(saved[i].id === img.id){
                    flag= false;
                    console.log("Image is already exist")
                    toast.success('Image is already saved!', {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                        });
             
                    break;
                }
        }
        }
            if(flag){
                setSaved([...saved,img])
                // console.log("Image is  saved")
                toast.success('Image is saved', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
            
            }

    }
    // console.log(images)
    return(
        <>
       
     <ToastContainer />
     
        <div className="container-fluid text-center "id="top">
            
                {loader ?(
                    <Loader/>

                ):(
                <>
                <div className="flex">
                {images.map((image)=>(
            <div key={image.id}className='items' onClick={()=>{saveImage(image)}}>
                <img src={image.src.medium}alt=""/>
            </div>
            ))}
            </div>

        
                </>
                )}
     
            {images.lenght !=0 &&  (<a href="#top" className="btn btn-warning  my-5">Back to top</a>
            
              )}
           
        </div>
        </>
    );
};
export default Home