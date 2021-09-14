import { generateKeyPair } from "jose/util/generate_key_pair";
import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";
import { EncryptJWT } from "jose/jwt/encrypt";
import { jwtDecrypt } from "jose/jwt/decrypt";
import { generateSecret } from "jose/util/generate_secret";

(async () => {
  {
    const alg = "EdDSA";
    const keypair = await generateKeyPair(alg);

    const jwt = await new SignJWT({ "urn:example:claim": true })
      .setProtectedHeader({ alg })
      .setAudience("urn:example:audience")
      .setIssuer("urn:example:issuer")
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(keypair.privateKey);

    console.log("Signed JWT", jwt);
    await jwtVerify(jwt, keypair.publicKey);
  }

  {
    const alg = "A256GCM";
    const secret = await generateSecret(alg);

    const jwt = await new EncryptJWT({ "urn:example:claim": true })
      .setProtectedHeader({ alg: "dir", enc: alg })
      .setAudience("urn:example:audience")
      .setIssuer("urn:example:issuer")
      .setIssuedAt()
      .setExpirationTime("2h")
      .encrypt(secret);

    console.log("Encrypted JWT", jwt);
    await jwtDecrypt(jwt, secret);
  }
})().then(
  () => process.exit(0),
  () => process.exit(1)
);
