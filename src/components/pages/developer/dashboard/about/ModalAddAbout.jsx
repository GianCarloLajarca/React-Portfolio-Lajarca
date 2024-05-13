import React from 'react'
import { InputText, InputTextArea } from '../../../../helpers/FormInputs';
import { StoreContext } from '../../../../../store/StoreContext';
import ModalWrapper from '../../../../partials/modals/ModalWrapper';
import { LiaTimesSolid } from 'react-icons/lia';
import { Formik, Form } from 'formik'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton';
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as Yup from 'yup'
import { queryData } from '../../../../helpers/queryData';

const ModalAddAbout = ({itemEdit}) => {
    const{store, dispatch} = React.useContext(StoreContext);
    const handleClose = () => dispatch(setIsAdd(false));

    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/about/${itemEdit.about_aid}` :`/v1/about` ,
            itemEdit ? "put" : "post",
            values
        ),

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["about"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        }else{
            dispatch(setError(true))
            dispatch(setMessage(data.error))
        }
        },
    });

    const initVal = {
        about_title: itemEdit ? itemEdit.about_title : "",
        about_image: itemEdit ? itemEdit.about_image : "",
        about_description: itemEdit ? itemEdit.about_description : "",
        about_detail: itemEdit ? itemEdit.about_detail : "",
        about_name: itemEdit ? itemEdit.about_name : "",
        about_email: itemEdit ? itemEdit.about_email : "",
        about_phone: itemEdit ? itemEdit.about_phone : "",
        about_birthday: itemEdit ? itemEdit.about_birthday : "",
        about_nationality: itemEdit ? itemEdit.about_nationality : "",
        about_address: itemEdit ? itemEdit.about_address : "",
        about_publish_date: itemEdit ? itemEdit.about_publish_date : "",
    }

    const yupSchema = Yup.object({
        // about_title: Yup.string().required('Required'),
        about_image: Yup.string().required('Required'),
        about_description: Yup.string().required('Required'),
        about_detail: Yup.string().required('Required'),
        about_name: Yup.string().required('Required'),
        about_email: Yup.string().required('Required'),
        about_phone: Yup.string().required('Required'),
        about_birthday: Yup.string().required('Required'),
        about_nationality: Yup.string().required('Required'),
        about_address: Yup.string().required('Required'),
        about_publish_date: Yup.string().required('Required'),
    })
  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-secondary text-content h-full">
              <div className="modal-header p-4 relative">
                  <h2>New Portfolio</h2>
                  <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4">
                  <Formik
                      initialValues={initVal}
                      validationSchema={yupSchema}
                      onSubmit={async (values) => {
                          mutation.mutate(values)
                      }}
                  >
                      {(props) => {
                          return (
                      <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                      <div className='grow overflow-y-auto'>
                          
                      <div className="input-wrap">
                          <InputText
                              label="Title"
                              type="text"
                              name="about_title"
                          />
                      </div>

                      <div className="input-wrap">
                      <InputText
                              label="Image"
                              type="text"
                              name="about_image"
                          />
                      </div>

                      <div className="input-wrap">
                      <InputTextArea
                              label="Description"
                              type="text"
                              name="about_description"
                              className='h-[10rem] resize-none'
                          />
                      </div>

                      <div className="input-wrap">
                          <InputTextArea
                              label="Detail"
                              type="text"
                              name="about_detail"
                              className='h-[10rem] resize-none'
                          />
                      </div>

                      <div className="input-wrap">
                      <InputText
                              label="Name"
                              type="text"
                              name="about_name"
                          />
                      </div>

                      <div className="input-wrap">
                      <InputText
                              label="Email"
                              type="text"
                              name="about_email"
                          />
                      </div>

                      <div className="input-wrap">
                      <InputText
                              label="Phone"
                              type="text"
                              name="about_phone"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="Date of Birth"
                              type="text"
                              name="about_birthday"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="Nationality"
                              type="text"
                              name="about_nationality"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputTextArea
                              label="Address"
                              type="text"
                              name="about_address"
                          />
                      </div>

                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="about_publish_date"
                          />
                      </div>
                      </div>

                      <div className='form-action'>
                          <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add" }</button>
                          <button className='btn btn-form btn--cancel' type="button" onClick={handleClose}>Cancel</button>
                      </div>
                  </Form>)}}
                  
                  </Formik>
              </div>
      </div>
    </ModalWrapper>
  )
}

export default ModalAddAbout