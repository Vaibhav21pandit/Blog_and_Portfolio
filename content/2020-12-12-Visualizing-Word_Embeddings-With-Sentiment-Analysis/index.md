---
title: Visualizing word embeddings with sentiment analysis 
tags: [Python,SentimentAnalysis,DeepLearning,NLP,Embeddings]
date: 2020-12-12
path: blog/Visualizing-Word_Embeddings-With-Sentiment-Analysis
cover: ./cover.png
excerpt: Visualization of word embeddings using a sentiment analysis model.
---
Natural Language Processing is everywhere these days, You can find it in Siri, Alexa, Echo, Gboard and Gmail next word predictions etc. It has other cool usage too like Google translate,chatbots etc. and behind most of this stuff are `embeddings`.

In this article we will see the fundamentals of NLP with a practical approach i.e we are going to build a sentiment analysis model using Amazon and Yelp dataset ([Download](https://drive.google.com/uc?id=13ySLC_ue6Umt9RJYSeM2t-V0kCv-4C-P)) and classify them into positive and negative reviews and then using this trained model we are going to visualize the word embeddings.This will give you insights into how to tweak a model for better performance based on embedding representations in space.

Computers do not understand natural language as humans do so we need to convert it into a format understandable by the system.For this we have the processes of converting words to  tokens, sequences and embeddings

Let's get started, First we will talk about tokenization, Stanford NLP group defines it as *Given a character sequence and a defined document unit, tokenization is the task of chopping it up into pieces, called tokens , perhaps at the same time throwing away certain characters, such as punctuation* Let's see an example of this, say you have a sentence- "Mary had a few little lambs".

The tokens that can be extracted from the sentence are - ["mary","had","a", "few","little","lambs"]. The tokens extracted vary for different tokenizers like if using a SpaCy tokenizer it preserves the casing of the alphabets and so we'd have "Mary" instead of ''mary".  

**Let's begin to code and look at our dataset**

```py
import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
import pandas as pd
```

```py
#Get the dataset from a google drive
path = tf.keras.utils.get_file('reviews.csv', 
                               'https://drive.google.com/uc?id=13ySLC_ue6Umt9RJYSeM2t-V0kCv-4C-P')
```

```py
# Read the csv file
dataset = pd.read_csv(path)

# Review the first few entries in the dataset
dataset.head()

# Get the reviews from the text column
reviews = dataset['text'].tolist()
```

**Now let's tokenize our text**

```py
#Tokenize the text
tokenizer = Tokenizer(oov_token="<OOV>")
tokenizer.fit_on_texts(reviews)

word_index = tokenizer.word_index
print(len(word_index))
print(word_index)
```

You can notice a term `oov_token` inside the Tokenizer function.This token is used to represent words that are not in the vocabulary(the set of all the words that are to be tokenized).So when a new word that's not present in our vocabulary is encountered,we say it's an Out-Of-Vocabulary token.

Since the computer does not understand natural language,we need the index corresponding to words we tokenized to extract information out of a document. Now that the words from our sentence have been converted to tokens  we can extract the index of the words made by our tokenizer. We can notice that since our sentences are of different lengths so are our sequences but the model does not accept inputs of variable length, to solve this problem, we will have to either pad the shorter sequences with zero or truncate the longer ones to a fixed size.This can be easily achieved with `pad_sequences` function.

```py
sequences = tokenizer.texts_to_sequences(reviews)
padded_sequences = pad_sequences(sequences, padding='post')

# What is the shape of the vector containing the padded sequences?
# The shape shows the number of sequences and the length of each one.
print(padded_sequences.shape)

# What is the first review?
print (reviews[0])

# Show the sequence for the first review
print(padded_sequences[0])

# Try printing the review and padded sequence for other elements.
```

Next, we will convert our sentences with words to sequences with indexes which can be fed to the ML models directly or after converted into embeddings.

```py
max_len=50
# Separate out the sentences and labels into training and test sets
training_size = int(len(sentences) * 0.8)

training_sequences = sequences_padded[0:training_size]
testing_sequences = sequences_padded[training_size:]
training_labels = labels[0:training_size]
testing_labels = labels[training_size:]

# Make labels into numpy arrays for use with the network later
training_labels_final = np.array(training_labels)
testing_labels_final = np.array(testing_labels)
```

After preprocessing we will now build our model.The model consists of a an embedding layer followed by a `globalAveragePool1d` and then two dense layers with activations `relu` and `sigmoid` respectively.

We could have used `Flatten` instead of `GlobalAveragePooling1D` but based on experiments the latter gives better results. 

```py
embedding_dim = 16

model = tf.keras.Sequential([
    tf.keras.layers.Embedding(vocab_size, embedding_dim, input_length=max_length),
    tf.keras.layers.GlobalAveragePooling1D(), 
    tf.keras.layers.Dense(6, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.summary()
```

Now let's train our model and plot the results

```py
num_epochs = 30
model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])
history = model.fit(training_sequences, training_labels_final, epochs=num_epochs, validation_data=(testing_sequences, testing_labels_final))

#Plotting the loss
import matplotlib.pyplot as plt
def plot_graphs(history, string):
  plt.plot(history.history[string])
  plt.plot(history.history['val_'+string])
  plt.xlabel("Epochs")
  plt.ylabel(string)
  plt.legend([string, 'val_'+string])
  plt.show()
  
plot_graphs(history, "accuracy")
plot_graphs(history, "loss")
```
Accuracy Curve             |  Loss Curve
:-------------------------:|:-------------------------:
![](https://github.com/Vaibhav21pandit/Assets/blob/main/blog_assets/2020-12-12-Visualizing-Word_Embeddings-With_Sentiment-Analysis/plot-2.png?raw=True)  |  ![](https://github.com/Vaibhav21pandit/Assets/blob/main/blog_assets/2020-12-12-Visualizing-Word_Embeddings-With_Sentiment-Analysis/Untitled.png?raw=True)

<!-- <p style="display:grid;" align='center'>
<img src=''>

<img src="https://github.com/Vaibhav21pandit/Assets/blob/main/blog_assets/2020-12-12-Visualizing-Word_Embeddings-With_Sentiment-Analysis/Untitled.png?raw=True">
</p> -->

**A word embedding is a learned representation for text where words that have the same meaning have a similar representation.**

**Visualizing Embeddings**

This is the part where we get to see the embeddings from our trained embedding layer mapped in 3D space.For this we need to first get the weights of our trained embedding layer and save the weight vectors and metadata into two separate files.

```py
weights=model.layers[0].get_weights()
out_vectors=io.open('vectors.tsv',"w")
out_metadat=io.open('metadata.tsv',"w")
for num in range(1,len(vocabulary)):
	word=reverse_word_index(word_num)
	embeddings=weights(word_num)
	out_metadata.write(word)
	out_vector.write('\t'.join([str(x) for x in embeddings]))
out_vector.close()
out_metadata.close()
```

We can now use these files to visualize our embeddings with a great tool called [Embedding Projector](http://projector.tensorflow.org/).Head over to the linked website to dig deeper into this tool.

We will input the files we just created and let the tool do the rest of the work. Here's a snippet from the embedding projector:

![](https://github.com/Vaibhav21pandit/Assets/blob/main/blog_assets/2020-12-12-Visualizing-Word_Embeddings-With_Sentiment-Analysis/embedding.png?raw=True)


All the dots are different embeddings, each belonging a word in our vocabulary, as you can see the model is poorly trained since, ideally, words belonging to negative reviews should have clustered on one side and the ones from positive reviews on the other side.But all we get is random projections of the embeddings with no clustering.

Let's take a look at the performance of our model on previously unseen examples.We will now define a function for model inference:

```py
max_length = 100  #The length of reviews we want to input into the model

def predict_review(model, new_sentences, maxlen=max_length, show_padded_sequence=True ):
  # Keep the original sentences so that we can keep using them later
  # Create an array to hold the encoded sequences
  new_sequences = []

  # Convert the new reviews to sequences
  for i, frvw in enumerate(new_sentences):
    new_sequences.append(tokenizer.encode(frvw))

  trunc_type='post' 
  padding_type='post'

  # Pad all sequences for the new reviews
  new_reviews_padded = pad_sequences(new_sequences, maxlen=max_length, 
                                 padding=padding_type, truncating=trunc_type)             

  classes = model.predict(new_reviews_padded)

  # The closer the class is to 1, the more positive the review is
  for x in range(len(new_sentences)):
    
    # We can see the padded sequence if desired
    # Print the sequence
    if (show_padded_sequence):
      print(new_reviews_padded[x])
    # Print the review as text
    print(new_sentences[x])
    # Print its predicted class
    print(classes[x])
    print("\n")
```

Below are results of the trained model on some fake reviews we've written.

```py
fake_reviews = ["I love this phone", 
                "Everything was cold",
                "Everything was hot exactly as I wanted", 
                "Everything was green", 
                "the host seated us immediately",
                "they gave us free chocolate cake", 
                "we couldn't hear each other talk because of the shouting in the kitchen"
              ]

predict_review(model, fake_reviews)
```

![](https://github.com/Vaibhav21pandit/Assets/blob/main/blog_assets/2020-12-12-Visualizing-Word_Embeddings-With_Sentiment-Analysis/result.png?raw=True)

Here a probability close to 1 means a positive review and a probability value close to 0 is for negative review. 

The Model misclassified the 2nd sentence as negative and the is not so sure about the 6th sentence whereas they are clearly positive.So we can see how visualizing embeddings can give us an idea about how good our model has been trained.

So with this I will wrap up this article, I will try to write about text summarization in the coming posts. 

Also, if you like these articles, follow me on [Twitter](https://twitter.com/Vaibhavpandit25) for updates on when I post new ones. 

Goodbye, for now 👋. 

