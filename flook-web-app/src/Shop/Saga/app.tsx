import { put, all, takeLatest } from "redux-saga/effects";
import { responseGenerator } from './index'
import actionTypes from "../Action/constants";
import Services from "../../Services"
import Action from "../Action"

function* FindGenre(){
  try {
    const response: responseGenerator = yield Services.app.findGenre();
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.app.findGenreSuccess(response.data))
    }else {
      yield put(Action.app.findGenreFailure(response.data))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindAuthor(){
  try {
    const response: responseGenerator = yield Services.app.findAuthor();
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.app.findAuthorSuccess(response.data))
    }else {
      yield put(Action.app.findAuthorFailure(response.data))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindManga(action: any){
  try {
    const data = action.payload
    const response: responseGenerator = yield Services.app.findManga(data);
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.app.findMangaSuccess(response))
    }else {
      yield put(Action.app.findMangaFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindMangaById(action: any){
  const id = action.payload
  try {
    const response: responseGenerator = yield Services.app.findMangaById(id);
    console.log('response', response)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(Action.app.findMangaByIdSuccess(response))
    }else{
      yield put(Action.app.findMangaByIdFailure(response))
    }
  } catch (error) {
    console.log('Error DetailSagas', error)
  } finally {
    console.log('DetailSagas')
  }
}

function* FindChapterByMangaId(action: any){
  const data = action.payload
  try {
    const response: responseGenerator = yield Services.app.findChapterByMangaId(data);
    console.log('response', response)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(Action.app.findChapterByMangaIdSuccess(response))
    }else{
      yield put(Action.app.findChapterByMangaIdFailure(response))
    }
  } catch (error) {
    console.log('Error Detail-ChapterSagas', error)
  } finally {
    console.log('Detail-ChapterSagas')
  }
}

function* FindChapterById(action: any){
  const id = action.payload
  try {
    const response: responseGenerator = yield Services.app.findChapterById(id);
    console.log('response', response)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(Action.app.findChapterByIdSuccess(response))
    }else{
      yield put(Action.app.findChapterByIdFailure(response))
    }
  } catch (error) {
    console.log('Error ChapterSagas', error)
  } finally {
    console.log('ChapterSagas')
  }
}

export default function* appSaga() {
  yield all([
    takeLatest(actionTypes.findManga, FindManga),
    takeLatest(actionTypes.findMangaById, FindMangaById),
    
    takeLatest(actionTypes.findGenre, FindGenre),
    takeLatest(actionTypes.findAuthor, FindAuthor),

    takeLatest(actionTypes.findChapterByMangaId, FindChapterByMangaId),
    takeLatest(actionTypes.findChapterById, FindChapterById),
  ]) 
}