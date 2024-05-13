import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper';
import { LiaTimesSolid } from 'react-icons/lia';
import { Formik, Form } from 'formik'
import { InputText, InputTextArea } from '../../../../helpers/FormInputs';
import SpinnerButton from '../../../../partials/spinners/SpinnerButton';
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { StoreContext } from '../../../../../store/StoreContext';
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction';
import { queryData } from '../../../../helpers/queryData';

const ModalAddSkill = ({itemEdit}) => {
  const{store, dispatch} = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  const queryClient = useQueryClient();
  
  const mutation = useMutation({
      mutationFn: (values) =>
      queryData(
          itemEdit ? `/v1/skill/${itemEdit.skill_aid}` :`/v1/skill` ,
          itemEdit ? "put" : "post",
          values
      ),

      onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["skill"] });
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
      skill_title: itemEdit ? itemEdit.skill_title : "",
      skill_image: itemEdit ? itemEdit.skill_image : "",
      skill_description: itemEdit ? itemEdit.skill_description : "",
      skill_publish_date: itemEdit ? itemEdit.skill_publish_date : "",
  }

  const yupSchema = Yup.object({
    //   skill_title: Yup.string().required('Required'),
      skill_image: Yup.string().required('Required'),
      skill_description: Yup.string().required('Required'),
      skill_publish_date: Yup.string().required('Required'),
  })
  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-secondary text-content h-full">
              <div className="modal-header p-4 relative">
                  <h2>New Skill</h2>
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
                              name="skill_title"
                          />
                      </div>

                      <div className="input-wrap">
                      <InputText
                              label="Image"
                              type="text"
                              name="skill_image"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputTextArea
                              label="Description"
                              type="text"
                              name="skill_description"
                              className='h-[10rem] resize-none'
                          />
                      </div>

                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="skill_publish_date"
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

export default ModalAddSkill