import yaml from "js-yaml"

let cloudConfigObj = {
  "write_file": []
}

const addWriteFile = (writeObj) => {
  if (!("write_file" in cloudConfigObj)) {
    cloudConfigObj["write_file"] = []
  }

  cloudConfigObj.writefile.push(writeObj)
}

const exportYaml = () => {
  yaml.dump(cloudConfigObj)
}

export default cloudConfigObj;
export { addWriteFile, exportYaml }
