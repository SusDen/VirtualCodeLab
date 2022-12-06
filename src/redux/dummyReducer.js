let initialState = {
    contactGlow: false
}

const dummyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_GLOW : {
            return {
                ...state, contactGlow: true
            }
        }
        case CONTACT_GLOW_OFF : {
            return {
                ...state, contactGlow: false
            }
        }
        default: {
            return state
        }
    }
}

const CONTACT_GLOW = "CONTACT_GLOW"
const CONTACT_GLOW_OFF = "CONTACT_GLOW_OFF"

export const contatcGlowing = () => ({type: CONTACT_GLOW})
export const contatcGlowOFF = () => ({type: CONTACT_GLOW_OFF})


export default dummyReducer