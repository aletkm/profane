import { AddEdit } from 'components/users';
import { userService } from 'services';


export async function getServerSideProps({ params }) {
    
       const user =  userService.getById(params.id); 
         
    return {
        
        props: { user }
        
    }
}

export default AddEdit;