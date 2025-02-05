const addressServer = "https//iran.com/api";

document.write(addressServer);

try {
    addressServer = "https//IRAN.com/api";
    document.write("\n server address changed successfully.");
}
catch {
    document.write("\n you can not change server address.");
}

const Names = ["ali", "amir", "sara", "mohammad"];

document.write("</br>" + Names);

Names.push("gavad");

document.write("</br>" + Names);


