import React, {lazy} from 'react'; 


const Filter = lazy(() => import('../components/Filter'/*WebpackChunkName: "Filter"*/ ))
const AddNameContact = lazy(() => import('../components/Form' /*WebpackChunkName: "Form"*/))
const ContactList = lazy(() => import('../components/ContactList'/*WebpackChunkName: "ContactList"*/)) 


const ContactsPage = () => {
    return (
      <div>
        <h1>Телефонная книга</h1>
        <AddNameContact />
        <h2>Мои контакты: </h2>
        <Filter />
        <ContactList />
      </div>)
}
export default ContactsPage;