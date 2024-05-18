import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { queryData } from '../../../../helpers/queryData'
import * as Yup from 'yup'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import { Formik, Form, useFormik } from 'formik'
import { InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'


const Contact = () => {
  const {store, dispatch} = React.useContext(StoreContext)
 
  const queryClient = useQueryClient();
  const mutation = useMutation({
      mutationFn: (values) =>
      queryData(
          "/v1/contact",
          "post",
          values
      ),
 
      onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contact"] });
      if (data.success) {
          dispatch(setSuccess(true));
          dispatch(setMessage(`Successfuly updated.`));
      } else {
          dispatch(setError(true));
          dispatch(setMessage(data.error));
      }
      },
  });


 
   const initVal  = {
        contact_name : "",
        contact_email : "",
        contact_message : "",
     
   }


   const yupSchema = Yup.object({
     
      contact_name: Yup.string().required("Required"),
      contact_email: Yup.string().required("Required").email("Invalid Email"),
      contact_message: Yup.string().required("Required"),
   })


  return (
    <>
        <section id='contact' className='contact py-40 px-72'>
         <div className='grid grid-cols-2 gap-24'>
              <div className="contact-info flex flex-col gap-12">
                  <h2 className='text-5xl text-accent'>Contact</h2>
                  <p>Have questions or inquiries?
                    Feel free to reach out to me using the contact form below or through the provided contact details. I'm always eager to hear from you and assist in any way I can.</p>
               
                <ul className='contact-details flex flex-col gap-5'>
                    <li className='flex flex-row gap-5'><FaPhoneAlt className='text-accent text-2xl'/><span className='text-content'>+63 928 688 9888</span></li>
                    <li className='flex flex-row gap-5'><MdEmail className='text-accent text-2xl'/><span className='text-content'>gianlajarca14@gmail.com</span></li>
                    <li className='flex flex-row gap-5'><FaLocationDot className='text-accent text-2xl'/><span className='text-content'>Brgy. Anilao-Labac, Lipa City</span></li>
                </ul>
                <ul className='contact-icon flex flex-row gap-5'>
                      <li><FaFacebook  className='text-2xl text-accent'/></li>
                      <li><FaLinkedin className='text-2xl text-accent'/></li>
                      <li><FaInstagram  className='text-2xl text-accent'/></li>
                      <li><FaTwitter  className='text-2xl text-accent'/></li>
                </ul>
              </div>
              <Formik
                initialValues={initVal}
                validationSchema={yupSchema}
                onSubmit={async (values) => {
                    mutation.mutate(values)
                }}
            >


              {(props) => {
                return (
                    <Form>
                         <div className='contact-form mt-20'>


                    <div className="input-row flex-col gap-5 mb-[20px] items-center basis-full">
                          {/* <div className="input-group">
                              <label className='mb-[6px] block text-[#5A5A5A]'>Name</label>
                              <input type="text" placeholder='' className='text-primary w-full border-[none] border-b-[1px_solid_#ccc] outline-[none] pb-[5px] bg-none w-[350px]
                              py-2 px-2'/>
                          </div> */}
                          <InputText 
             
                          label="Name"
                          type="text"
                          name="contact_name"
                          placeholder="Enter your Name"

                        />
                    </div>


                    <div className="input-row flex-col gap-5 mb-[20px] items-center basis-full">
                          {/* <div className="input-group">
                              <label className='mb-[6px] block text-[#5A5A5A]'>Name</label>
                              <input type="text" placeholder='' className='text-primary w-full border-[none] border-b-[1px_solid_#ccc] outline-[none] pb-[5px] bg-none w-[350px]
                              py-2 px-2'/>
                          </div> */}
                          <InputText 
             
                          label="Email"
                          type="text"
                          name="contact_email"
                          placeholder="Enter your Email"

                        />
                    </div>


                    <div className="input-row flex justify-between mb-[20px] basis-full">
                          <div className="message-Group basis-full">
                          <InputTextArea 
             
                            label="Message"
                            type="text"
                            name="contact_message"
                            placeholder="Message"

                          />
                          </div>
                    </div>

                    <div className='contact-send'>
                          <button className='py-4 px-10 uppercase border border-accent bg-accent text-primary font-thick w-48 mx-auto hover:bg-darkblue hover:text-accent transition-all hover:border 
                          hover:border-accent' type='submit'>{mutation.isPending ? <SpinnerButton/> : "Hire Me"}</button>
                    </div>


              </div>
                    </Form>
                )
              }}
              </Formik>
              {/* <div className='contact-form mt-20'>
                    <div className="input-row flex justify-between mb-[20px] basis-full">
                          <div className="input-group">
                              <label className='mb-[6px] block text-[#5A5A5A]'>Name</label>
                              <input type="text" placeholder='' className='text-primary w-full border-[none] border-b-[1px_solid_#ccc] outline-[none] pb-[5px] bg-none w-[350px]
                              py-2 px-2'/>
                          </div>
                    </div>


                    <div className="input-row flex justify-between mb-[20px] basis-full">
                          <div className="input-group">
                              <label className='mb-[6px] block text-[#5A5A5A]'>Email</label>
                              <input type="text" placeholder='' className='text-primary w-full border-[none] border-b-[1px_solid_#ccc] outline-[none] pb-[5px] bg-none
                              bg-none w-[350px] py-2 px-2'/>
                          </div>
                    </div>


                    <div className="input-row flex justify-between mb-[20px] basis-full">
                          <div className="message-Group basis-full">
                              <label className='mb-[6px] block text-[#5A5A5A]'>Message</label>
                              <textarea rows="5" placeholder="" className='text-primary w-full border-b-[1px_solid_#ccc] outline-[none] p-[10px] box-border bg-none border-t-[none] border-l-[none] border-r-[none]'></textarea>
                          </div>
                    </div>


                    <div className='contact-send'>
                          <button className='py-4 px-10 uppercase bg-accent text-primary font-thick w-48 mx-auto'>Hire Me</button>
                    </div>


              </div> */}
         </div>
        </section>
    </>
  )
}


export default Contact