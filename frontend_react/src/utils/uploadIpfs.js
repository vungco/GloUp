import axios from "axios";

// Khai báo key bảo mật
const PINATA_API_KEY = process.env.REACT_APP_PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.REACT_APP_PINATA_SECRET_API_KEY;

export const uploadToPinata = async (data) => {
  if (!data) return;

  try {
    let url = "";
    let payload;
    let headers = {
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET_API_KEY,
    };

    if (data instanceof File || data instanceof Blob) {
      // Xử lý nếu là File hoặc Blob
      url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
      const formData = new FormData();
      formData.append("file", data);
      payload = formData;
      headers["Content-Type"] = "multipart/form-data";
    } else {
      // Xử lý nếu là JSON hoặc object
      url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
      payload = data;
      headers["Content-Type"] = "application/json";
    }

    const res = await axios.post(url, payload, { headers });
    const ipfsHash = res.data.IpfsHash;
    return `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
  } catch (error) {
    console.error("Upload to Pinata failed:", error);
    throw error;
  }
};
