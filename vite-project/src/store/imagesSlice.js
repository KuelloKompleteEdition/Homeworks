import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, storage } from "../firebase/config";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

const initialState = {
  images: [],
  loading: false,
  error: null,
};

export const fetchImages = createAsyncThunk("images/fetchImages", async () => {
  const querySnapshot = await getDocs(collection(db, "images"));
  const images = [];
  querySnapshot.forEach((doc) => {
    images.push({ id: doc.id, ...doc.data() });
  });
  return images;
});

export const addImage = createAsyncThunk("images/addImage", async (image) => {
  const storageRef = ref(storage, `images/${image.name}`);
  await uploadBytes(storageRef, image);
  const url = await getDownloadURL(storageRef);
  const docRef = await addDoc(collection(db, "images"), { url, name: image.name });
  return { id: docRef.id, url, name: image.name };
});

export const updateImage = createAsyncThunk("images/updateImage", async ({ id, newImage }) => {
  const storageRef = ref(storage, `images/${newImage.name}`);
  await uploadBytes(storageRef, newImage);
  const url = await getDownloadURL(storageRef);
  const imageDoc = doc(db, "images", id);
  await updateDoc(imageDoc, { url, name: newImage.name });
  return { id, url, name: newImage.name };
});

export const deleteImage = createAsyncThunk("images/deleteImage", async (id) => {
  const imageDoc = doc(db, "images", id);
  const image = (await getDoc(imageDoc)).data();
  const storageRef = ref(storage, `images/${image.name}`);
  await deleteObject(storageRef);
  await deleteDoc(imageDoc);
  return id;
});

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(addImage.fulfilled, (state, action) => {
        state.loading = false;
        state.images.push(action.payload);
      })
      .addCase(addImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateImage.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.images.findIndex((image) => image.id === action.payload.id);
        if (index !== -1) {
          state.images[index] = action.payload;
        }
      })
      .addCase(updateImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        state.loading = false;
        state.images = state.images.filter((image) => image.id !== action.payload);
      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default imagesSlice.reducer;
