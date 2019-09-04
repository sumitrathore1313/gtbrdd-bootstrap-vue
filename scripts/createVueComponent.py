import argparse
import os
import stringcase

def main():
  componentPath = "../src/components"
  PComponentName = stringcase.pascalcase(componentName)
  # create a folder with component name
  path = "/home/sumit/Desktop/front-end/plugins/gtbrdd-bootstrap-vue"
  directory = path+"/src/components/"+stringcase.spinalcase(componentName)
  print(directory)
  if not os.path.exists(directory):
      os.makedirs(directory)

  # create index js file
  with open(os.path.join(directory, "index.js"), "w") as f:
    text ="""import B%s from './%s'
import { pluginFactory } from '../../utils/plugins'

const %sPlugin = /*#__PURE__*/ pluginFactory({
  components: {
    B%s
  }
})

export { %sPlugin }

export default %sPlugin
""" % (PComponentName, stringcase.spinalcase(componentName), PComponentName, PComponentName, PComponentName, PComponentName)
    f.write(text)

  # create main js file
  with open(os.path.join(directory, stringcase.spinalcase(componentName)+".js"), "w") as f:
    text = """import %s from './%s.vue'

export default {
  name: 'B%s',
  render: h => h(%s)
}
""" % (PComponentName, stringcase.spinalcase(componentName), PComponentName, PComponentName)
    f.write(text)

  # create main vue file
  with open(os.path.join(directory, stringcase.spinalcase(componentName)+".vue"), "w") as f:
    text = """<template>
  <div id="%s">
  </div>
</template>

<script>
export default {
  name: '%s',
  components: {},
  props: {
    steps: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      temp: null
    }
  }
}
</script>

<style scoped>
</style>
""" % (stringcase.spinalcase(componentName), PComponentName)
    f.write(text)

  # create package.json file
  with open(os.path.join(directory, "package.json"), "w") as f:
    text = """{
  "name": "@bootstrap-vue/%s",
  "version": "1.0.0",
  "meta": {
    "title": "%s",
    "description": "Group a series of buttons together on a single line with <b-%s>.",
    "components": [
      {
        "component": "B%s"
      }
    ]
  }
}
""" % (stringcase.spinalcase(componentName), stringcase.sentencecase(componentName), stringcase.spinalcase(componentName), PComponentName)
    f.write(text)

  with open(os.path.join(directory, "README.md"), "w") as f:
    text = "# "+ stringcase.sentencecase(componentName)
    f.write(text)
  # edit index esm
  esm_path = path+"/src/components/index.esm.js"
  with open(esm_path, "r") as f:
    lines = f.readlines()
    text = '// first block\n'
    i = lines.index(text)
    lines.insert(i+1, "import { "+PComponentName+"Plugin } from './"+stringcase.spinalcase(componentName)+"'")
    text = '// second block\n'
    i = lines.index(text)
    lines.insert(i+1, "export { "+PComponentName+"Plugin } from './"+stringcase.spinalcase(componentName)+"'")
  with open(esm_path, "w") as f:
    f.writelines(lines)

  index_path = path+"/src/components/index.js"
  with open(index_path, "r") as f:
    lines = f.readlines()
    text = '// third block\n'
    i = lines.index(text)
    lines.insert(i+1, "export { "+PComponentName+"Plugin as "+PComponentName+" } from './"+stringcase.spinalcase(componentName)+"'")
  with open(index_path, "w") as f:
      f.writelines(lines)


if __name__ == "__main__":
  parser = argparse.ArgumentParser("create component")
  parser.add_argument("name", help="vue component will be created.")
  args = parser.parse_args()
  componentName = args.name
  main()
