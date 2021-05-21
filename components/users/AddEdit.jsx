import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from '../Link';
import { userService, alertService } from 'services';

function AddEdit(props) {
    const user = props?.user;
    const isAddMode = !user;
    const router = useRouter();
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        auth0_id: Yup.string()
            .required('Auth0_id is required'),
        Nome: Yup.string()
            .required('Nome is required'),
        Created_at: Yup.string()
            .required('Created_at is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(user.auth0_id, data);
    }

    function createUser(data) {
        return userService.create(data)
            .then(() => {
                alertService.success('User added', { keepAfterRouteChange: true });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(auth0_id, data) {
        return userService.update(auth0_id, data)
            .then(() => {
                alertService.success('User updated', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{isAddMode ? 'Add User' : 'Edit User'}</h1>
            <div className="form-row">
                <div className="form-group col">
                    <label>Auth0_id</label>
                    <input name="auth0_id" type="text" {...register('auth0_id')} className={`form-control ${errors.auth0_id ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.auth0_id?.message}</div>
                </div>
                <div className="form-group col-5">
                    <label>Nome</label>
                    <input name="firstName" type="text" {...register('nome')} className={`form-control ${errors.nome ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.nome?.message}</div>
                </div>
                <div className="form-group col-5">
                    <label>Usuário Criado em:</label>
                    <input name="created_at" type="text" {...register('created_at')} className={`form-control ${errors.created_at ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.created_at?.message}</div>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary mr-2">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">Reset</button>
                <Link href="/users" className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}

export { AddEdit };