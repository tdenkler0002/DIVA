import hashlib
from Crypto.Cipher import AES
import base64
from Crypto import Random

class AESCipher:

    def __init__(self, key):
        # Block size
        self.bs = 32
        self.key = hashlib.sha256(key.encode()).digest()

    def encrypt(self, raw):
        # Pads the bytestring if not enough characters
        raw = self._pad(raw)
        # Generates a new random IV for each encryptd field
        # Important for generating different first blocks for identical fields
        iv = Random.new().read(AES.block_size)
        cipher = AES.new(self.key, AES.MODE_CBC, iv)
        # Requires the extra UTF encoding to work correctly
        return base64.b64encode(iv + cipher.encrypt(raw.encode('utf8')))

    def decrypt(self, enc):
        enc = base64.b64decode(enc)
        iv = enc[:AES.block_size]
        cipher = AES.new(self.key, AES.MODE_CBC, iv)
        return self._unpad(cipher.decrypt(enc[AES.block_size:])).decode('utf-8')

    def _pad(self, s):
        return s + (self.bs - len(s) % self.bs) * chr(self.bs - len(s) % self.bs)
