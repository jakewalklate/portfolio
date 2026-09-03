import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blood Cell MLP Classifier",
  description: "A Multi-Layer Perceptron for automated blood cell classification from microscopic images using TensorFlow and Keras.",
};

export default function BloodCellMLPPage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-20 px-6 min-h-screen">
      <article className="max-w-3xl w-full space-y-8">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to all projects</span>
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="px-2 py-0.5 text-center bg-rose-500/10 text-rose-400 rounded-full border border-rose-500/20">
              Machine Learning
            </span>
            <span>•</span>
            <span>Medical Imaging / Neural Networks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Blood Cell MLP Classifier
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            A Multi-Layer Perceptron regression model for automated blood cell classification from microscopic
            images, achieving 99.56% validation accuracy using the Blood Cell Detection Dataset.
          </p>
        </header>

        {/* Content */}
        <section className="prose prose-invert prose-zinc max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-white">The Problem</h2>
          <p className="text-zinc-400 leading-relaxed">
            Accurate identification of blood cell types is critical for medical diagnostics and treatment planning.
            Traditional manual classification via microscopy is <strong className="text-zinc-200">labour intensive</strong>,
            can be <strong className="text-zinc-200">subjective</strong>, and is susceptible to errors.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            This project investigates applying a Multi-Layer Perceptron to automate blood cell classification,
            highlighting the potential of neural networks to enhance clinical decision-making with faster,
            more consistent outcomes.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">How It Works</h2>

          <div className="grid gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">🔬 Data Processing</h3>
              <p className="text-zinc-400 text-sm">
                The Blood Cell Detection Dataset contains 100 high-resolution microscopic images with 2,340
                annotated cell regions. Each cell is cropped, resized to 64×64 pixels, normalized to [0,1],
                and one-hot encoded for classification.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">🧠 MLP Architecture</h3>
              <p className="text-zinc-400 text-sm">
                A fully connected neural network with an input layer that flattens image data, two dense hidden
                layers with ReLU activation and dropout regularization, and a softmax output layer for
                multi-class classification.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-green-400 mb-2">⚡ Forward Pass</h3>
              <p className="text-zinc-400 text-sm">
                Each neuron computes a weighted sum of inputs, adds a bias, and applies ReLU activation:
                <code className="text-xs bg-zinc-800 px-1 rounded">a = max(0, Σwᵢxᵢ + b)</code>.
                This nonlinearity allows the network to learn complex relationships in the data.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">🔄 Backpropagation</h3>
              <p className="text-zinc-400 text-sm">
                Differentiating cross-entropy loss with softmax yields:
                <code className="text-xs bg-zinc-800 px-1 rounded">∂L/∂W = (p - y)x</code>.
                The gradient is the outer product of the error (predicted minus true) and the previous
                layer&apos;s activations, propagated backward to update each weight.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-rose-400 mb-2">📊 Softmax Output</h3>
              <p className="text-zinc-400 text-sm">
                The final layer transforms raw logits into a probability distribution using softmax:
                <code className="text-xs bg-zinc-800 px-1 rounded">pᵢ = eᶻⁱ / Σeᶻʲ</code>.
                The class with highest probability is selected as the prediction.
              </p>
            </div>

            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">📉 Loss Function</h3>
              <p className="text-zinc-400 text-sm">
                Categorical cross-entropy measures the difference between predicted probabilities and true
                labels: <code className="text-xs bg-zinc-800 px-1 rounded">L = -Σyᵢlog(pᵢ)</code>.
                Minimizing this encourages high probability on correct classes.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">PAC-Learnability Analysis</h2>
          <p className="text-zinc-400 leading-relaxed">
            To verify the model is <strong className="text-zinc-200">Probably Approximately Correct (PAC)</strong>
            learnable, we calculated the minimum sample size required for given error and failure bounds:
          </p>
          <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl font-mono text-sm">
            <div className="text-zinc-400">
              <span className="text-zinc-200">ε (error margin):</span> 0.05<br />
              <span className="text-zinc-200">δ (failure probability):</span> 0.05<br />
              <span className="text-zinc-200">Required samples:</span> n ≥ 738<br />
              <span className="text-zinc-200">Actual training samples:</span> 1,882<br />
              <span className="text-zinc-200">Empirical error rate:</span> 0.0044 ✓
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            The training set exceeds the PAC requirement, and the empirical error (0.44%) is well below
            the epsilon threshold (5%), confirming successful learning.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Results</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-400">99.56%</div>
              <div className="text-sm text-zinc-500">Validation Accuracy</div>
            </div>
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-400">0.0413</div>
              <div className="text-sm text-zinc-500">Validation Loss</div>
            </div>
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-400">6.4M</div>
              <div className="text-sm text-zinc-500">Parameters</div>
            </div>
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-400">2</div>
              <div className="text-sm text-zinc-500">Epochs to Converge</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4">Technical Stack</h2>
          <ul className="text-zinc-400 space-y-2">
            <li>
              <strong className="text-zinc-200">TensorFlow + Keras:</strong> Deep learning framework for
              building and training the MLP architecture.
            </li>
            <li>
              <strong className="text-zinc-200">OpenCV:</strong> Image processing for cropping and resizing
              annotated cell regions from microscopy images.
            </li>
            <li>
              <strong className="text-zinc-200">Scikit-learn:</strong> Data splitting, preprocessing, and
              evaluation metrics.
            </li>
            <li>
              <strong className="text-zinc-200">Pandas + NumPy:</strong> Data manipulation and numerical
              operations for annotation processing.
            </li>
            <li>
              <strong className="text-zinc-200">Matplotlib:</strong> Visualization of training curves,
              confusion matrices, and sample predictions.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white pt-4">Future Work</h2>
          <p className="text-zinc-400 leading-relaxed">
            Future iterations should classify white blood cells into specific subtypes (granulocytes,
            lymphocytes, etc.). Current limitations include the relatively small dataset, lack of fine-grained
            WBC labels, and controlled image conditions. With 196,608 input neurons (256×256×3) and up to
            6.4 million parameters, the architecture could be optimized with convolutional layers for
            better spatial feature extraction.
          </p>
        </section>

        {/* Status Badge */}
        <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 text-sm rounded-full border border-sky-500/20">
              ✓ Completed
            </span>
            <a
              href="http://github.com/jakewalklate/blood-cell-classification"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              View source →
            </a>
          </div>
          <p className="text-sm text-zinc-500">
            <strong className="text-zinc-400">Dataset:</strong>{" "}
            <a
              href="https://www.kaggle.com/datasets/draaslan/blood-cell-detection-dataset"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-300 transition-colors"
            >
              Blood Cell Detection Dataset (BCDD)
            </a>{" "}
            by M. Draaslan on Kaggle.
          </p>
        </div>
      </article>
    </main>
  );
}