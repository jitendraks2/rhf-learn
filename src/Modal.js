import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useModalStore } from "./store/modalState";
import { useForm } from "react-hook-form";

export default function MyModal(props) {
  const { register, handleSubmit } = useForm();
  const isOpen = useModalStore((state) => state.isOpen);

  const closeModall = useModalStore((state) => state.closeModal);

  function closeModal() {
    closeModall();
  }

  const handleEdit = () => {};

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit <strong>{props.todoId}</strong>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className=" mt-3" onSubmit={handleSubmit(handleEdit)}>
                      <div className="mb-6">
                        <input
                          type="text"
                          // if I remove this default value will work fine
                          {...register("todos")}
                          id="todos"
                          name="todos"
                          defaultValue={props.todoId}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          // placeholder="Edit your todo"

                          required
                        />
                      </div>

                      <div className="flex gap-5">
                        <button
                          type="button"
                          className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Confirm Edit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
