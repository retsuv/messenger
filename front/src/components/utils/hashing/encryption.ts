import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

export default function encryption(message: string) {   
    let nonce = 10, path = '/', privateKey = "";
    const hashDigest = sha256(nonce + message);
    return Base64.stringify(hmacSHA512(path + hashDigest, privateKey)).replace(/[^a-zA-Z]/g, '');
}