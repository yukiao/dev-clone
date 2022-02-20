const acceptedAscii = [];

acceptedAscii.push(188);
acceptedAscii.push(8);

for (let i = 48; i <= 57; i++) {
  acceptedAscii.push(i);
}
for (let i = 65; i <= 90; i++) {
  acceptedAscii.push(i);
}
for (let i = 97; i <= 122; i++) {
  acceptedAscii.push(i);
}

export default acceptedAscii;
