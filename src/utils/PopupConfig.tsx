import { ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILURE } from './type'

export const popupConfig = {
    ADD_REVIEW_SUCCESS: {
        heading: 'Review added',
        primaryBtnLabel: '',
        secondryBtnLabel: 'Ok Got it!',
        childrenData: () => (
            <div>Your review has been added successfully.</div>
        )
    },
    ADD_REVIEW_FAILURE: {

    }
  };