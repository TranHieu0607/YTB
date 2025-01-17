import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    SEARCH_VIDEOS_FAIL,
    SEARCH_VIDEOS_REQUEST,
    SEARCH_VIDEOS_SUCCESS,
 } from '../actionType'
 
 export const homeVideosReducer = (
    state = {
       videos: [],
       loading: false,
       nextPageToken: null,
       activeCategory: 'All',
    },
    action
 ) => {
    const { type, payload } = action
 
    switch (type) {
       case HOME_VIDEOS_SUCCESS:
          return {
             ...state,
             videos:
                state.activeCategory === payload.category
                   ? [...state.videos, ...payload.videos]
                   : payload.videos,
 
             loading: false,
             nextPageToken: payload.nextPageToken,
             activeCategory: payload.category,
          }
 
       case HOME_VIDEOS_FAIL:
          return {
             ...state,
             loading: false,
             error: payload,
          }
       case HOME_VIDEOS_REQUEST:
          return {
             ...state,
             loading: true,
          }
       default:
          return state
    }
 }

 export const searchVideosReducer = (
    state = {
       videos: [],
       loading: true,
    },
    action
 ) => {
    const { type, payload } = action
 
    switch (type) {
       case SEARCH_VIDEOS_SUCCESS:
          return {
             ...state,
             videos: payload,
             loading: false,
          }
 
       case SEARCH_VIDEOS_FAIL:
          return {
             ...state,
             loading: false,
             error: payload,
          }
       case SEARCH_VIDEOS_REQUEST:
          return {
             ...state,
             loading: true,
          }
       default:
          return state
    }
 }