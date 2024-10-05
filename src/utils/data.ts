const NAV_LINKS = [
    {
        to: '/private/declarations',
        label: 'Les déclarations'
    },    
    {
        to: '/private/requests',
        label: 'Les demandes'
    },
    {
        to: '/private/profiles',
        label: 'Les personnes'
    },
    {
        to: '/private/notifications',
        label: 'Les courriers'
    }
];

const UPDATE_DECLARATIONS = "UPDATE_DECLARATIONS";
const UPDATE_DECLARATION_STATUS = "UPDATE_DECLARATION_STATUS";
const INITIAL_STATE = {declarations: []}
export {
    INITIAL_STATE,
    NAV_LINKS,
    UPDATE_DECLARATIONS,
    UPDATE_DECLARATION_STATUS
}