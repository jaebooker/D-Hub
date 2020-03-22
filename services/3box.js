const Box = require('3box');
const Infura = require('./infura.js');
const myProfile = Box.getProfile(myAddress);
const {
  profileGraphQL, getProfile,
  getProfiles, getVerifiedAccounts
} = require('3box/lib/api');

const box = Box.openBox(myAddress, window.ethereum, {});
const space = box.openSpace('myApp');

const BoxData = async (name) => {
    const hash = space.public.get(name);
    const infuraData = Infura.IPFSPortalGet.getObjectData(hash);
    return infuraData;
};

const AllBoxData = async => {
    const boxData = space.public.all();
    let infuraDataArray;
    boxData.forEach(function(hash,index) {
        const infuraData = Infura.IPFSPortalGet(hash);
        infuraDataArray.push(infuraData);
    });
    return infuraDataArray;
};

const CreateBoxData = async (name, object) => {
    const infuraData = Infura.IPFSPortalPost(object);
    const hash = infuraData.Hash;
    const infuraHash = box.public.set(name, hash);
    return infuraHash;
};

module.exports = { BoxData, AllBoxData, CreateBoxData };
