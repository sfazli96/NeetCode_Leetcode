## A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

## Implement the Trie class:

## Trie() Initializes the trie object.
## void insert(String word) Inserts the string word into the trie.
## boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
## boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

class Trie:

    def __init__(self):
        self._trie = {} # intializes the trie object (empty)

    def insert(self, word: str) -> None:
        if isinstance(word, str): # first check if its a string
            current_node = self._trie
            for char in word: # iterate in the word and check if its in the node dictionary
                if char not in current_node:
                    current_node[char] = {} # created an empty dictionary of current node with char similar key-value-pair
                current_node = current_node[char] # insert it into the trie  and traverse
            current_node['#'] = None
        else:
            return None

    def search(self, word: str) -> bool:
        if isinstance(word, str): # first check if its a string
            current_node = self._trie
            for char in word: # iterate in the word and check if its in the node dictionary
                if char not in current_node: # this will check if the string is NOT in the trie then its false, otherwise
                    return False
                current_node = current_node[char] # insert it into the trie  and traverse
            return '#' in current_node # we still check if the specifical character is present in the dictionary.
        else:
            return False

    def startsWith(self, prefix: str) -> bool:
        if isinstance(prefix, str):
            current_node = self._trie
            for char in prefix:
                if char not in current_node:
                    return False
                current_node = current_node[char]
            return True
        else:
            return False

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
