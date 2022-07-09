```js
    <script>
      // 1.传入一个函数，函数接受两个函数参数
      // new Promise((resolve, reject) => {
      //  	resolve('第一步')
      //	})

      // class MyPromise {
      // 	static  pending = '待定';
      // 	static	fullfiled = '成功';
      // 	static	reject = '失败';
      // 	constructor(executor) {
      // 		this.status = MyPromise.pending;
      // 		executor(this.resolve.bind(this), this.reject.bind(this));
      // 	}
      // 	resolve(res) {
      // 		// 只能由pending -> 到fullfiled
      // 		if (this.status === MyPromise.pending) {
      // 			this.status = MyPromise.fullfiled;
      // 		}
      // 	}
      // 	reject(err) {
      // 		// 只能由pending -> 到reject
      // 		if (this.status === MyPromise.pending) {
      // 			this.status = MyPromise.reject;
      // 		}
      // 	}

      // }

      // new MyPromise((resolve, reject) => {
      // 	resolve('1') // 此时的this 如果不是写成箭头函数会指向window 故 记得绑定executor(this.resolve.bind(this), this.reject.bind(this));
      // })

      //

      // 2.resolve, reject 传入参数 分别 传递给then方法
      // new Promise((resolve, reject) => {
      // 	resolve('第一步') // 或者 reject(2)
      // }).then((res) => {
      // 	console.log('第二步')
      // }, (err) => {
      // 	console.log(err)
      // })

      // class MyPromise {
      // 	static  pending = '待定';
      // 	static	fullfiled = '成功';
      // 	static	reject = '失败';
      // 	constructor(executor) {
      // 		this.status = MyPromise.pending;
      // 		this.result = null;
      // 		// 使用try catch的原因
      // 		//new Promise((resolve, reject) => {
      // 		// 	throw newError('hhh') // 原生promise 会调用then的失败回调
      // 		// })
      // 		try {
      // 			executor(this.resolve.bind(this), this.reject.bind(this));
      // 		} catch (error) {
      // 			this.reject(error)
      // 		}
      // 	}
      // 	resolve(res) {
      // 		// 只能由pending -> 到fullfiled
      // 		if (this.status === MyPromise.pending) {
      // 			this.status = MyPromise.fullfiled;
      // 			this.result = res;
      // 		}
      // 	}
      // 	reject(err) {
      // 		// 只能由pending -> 到reject
      // 		if (this.status === MyPromise.pending) {
      // 			this.status = MyPromise.reject;
      // 			this.result = err;
      // 		}
      // 	}
      // 	//
      // 	then(onFulFiled, onReject) {
      // 		// then函数的两个参数 如果不是函数就要被忽略
      // 		onFulFiled = typeof onFulFiled === 'function' ? onFulFiled : () => {};
      // 		onReject = typeof onReject === 'function' ? onReject : () => {};
      // 		if (this.status === MyPromise.fullfiled) {
      // 			onFulFiled(this.result) // onFulFiled 不为函数时需要兼容
      // 		}
      // 		if (this.status === MyPromise.reject) {
      // 			onReject(this.result)
      // 		}

      // 	}
      // }

      // new MyPromise((resolve, reject) => {
      // 	console.log('第一步')
      // 	resolve('第二步')
      // }).then(res => {
      // 	console.log(res)
      // })

      // 3支持异步
      // new Promise((resolve, reject) => {
      // 	console.log('1')
      // 	resolve('3')
      // }).then(res => {
      // 	console.log(res)
      // })
      // console.log('2')

      // new MyPromise((resolve, reject) => {
      // 	console.log('1')
      // 	resolve('3')
      // }).then(res => {
      // 	console.log(res)
      // })
      // console.log('2') // 1,3,2

      // 不支持异步的原因分析
      // resolve 状态是fullfiled 执行then方法 打印结果 then方法先于console.log(2)执行
      // 利用宏任务

      // class MyPromise {
      // 	static  pending = '待定';
      // 	static	fullfiled = '成功';
      // 	static	reject = '失败';
      // 	constructor(executor) {
      // 		this.status = MyPromise.pending;
      // 		this.result = null;
      // 		// 使用try catch的原因
      // 		//new Promise((resolve, reject) => {
      // 		// 	throw newError('hhh') // 原生promise 会调用then的失败回调
      // 		// })
      // 		try {
      // 			executor(this.resolve.bind(this), this.reject.bind(this));
      // 		} catch (error) {
      // 			this.reject(error)
      // 		}
      // 	}
      // 	resolve(res) {
      // 		// 只能由pending -> 到fullfiled
      // 		if (this.status === MyPromise.pending) {
      // 			this.status = MyPromise.fullfiled;
      // 			this.result = res;
      // 		}
      // 	}
      // 	reject(err) {
      // 		// 只能由pending -> 到reject
      // 		if (this.status === MyPromise.pending) {
      // 			this.status = MyPromise.reject;
      // 			this.result = err;
      // 		}
      // 	}
      // 	//
      // 	then(onFulFiled, onReject) {
      // 		// then函数的两个参数 如果不是函数就要被忽略
      // 		onFulFiled = typeof onFulFiled === 'function' ? onFulFiled : () => {};
      // 		onReject = typeof onReject === 'function' ? onReject : () => {};
      // 		if (this.status === MyPromise.fullfiled) {
      // 			setTimeout(() => {
      // 				onFulFiled(this.result) // onFulFiled 不为函数时需要兼容
      // 			})
      // 		}
      // 		if (this.status === MyPromise.reject) {
      // 			setTimeout(() => {
      // 				onReject(this.result)
      // 			})
      // 		}

      // 	}
      // }

      // 4.支持setTimeout 嵌套
      // new Promise((resolve, reject) => {
      // 	console.log('1')
      // 	setTimeout(() => {
      // 		resolve('3')
      // 	})
      // }).then(res => {
      // 	console.log(res)
      // })
      // console.log('2') // 1, 2, 3

      // new MyPromise((resolve, reject) => {
      // 	console.log('1')
      // 	setTimeout(() => {
      // 		resolve('3')
      // 	})
      // }).then(res => {
      // 	console.log(res)
      // })
      // console.log('2') // 1, 2

      // 原因分析 then方法先于setTimeout 里面的resolve 执行 此时还是pending状态 缺少处理逻辑


      // class MyPromise {
      //   static pending = "待定";
      //   static fullfiled = "成功";
      //   static reject = "失败";
      //   constructor(executor) {
      //     this.status = MyPromise.pending;
      //     this.result = null;
      //     this.onFulFiledQueue = [];
      //     this.onRejectQueue = [];
      //     // 使用try catch的原因
      //     //new Promise((resolve, reject) => {
      //     // 	throw newError('hhh') // 原生promise 会调用then的失败回调
      //     // })
      //     try {
      //       executor(this.resolve.bind(this), this.reject.bind(this));
      //     } catch (error) {
      //       this.reject(error);
      //     }
      //   }
      //   resolve(res) {
      //     // 只能由pending -> 到fullfiled
      //     setTimeout(() => {
      //       if (this.status === MyPromise.pending) {
      //         this.status = MyPromise.fullfiled;
      //         this.result = res;
      //         this.onFulFiledQueue.forEach((cb) => cb(res));
      //       }
      //     });
      //   }
      //   reject(err) {
      //     // 只能由pending -> 到reject
      //     setTimeout(() => {
      //       if (this.status === MyPromise.pending) {
      //         this.status = MyPromise.reject;
      //         this.result = err;
      //         this.onRejectQueue.forEach((cb) => cb(err));
      //       }
      //     });
      //   }
      //   //
      //   then(onFulFiled, onReject) {
      //     // then函数的两个参数 如果不是函数就要被忽略
      //     onFulFiled = typeof onFulFiled === "function" ? onFulFiled : () => {};
      //     onReject = typeof onReject === "function" ? onReject : () => {};
      //     if (this.status === MyPromise.fullfiled) {
      //       setTimeout(() => {
      //         onFulFiled(this.result); // onFulFiled 不为函数时需要兼容
      //       });
      //     }
      //     if (this.status === MyPromise.reject) {
      //       setTimeout(() => {
      //         onReject(this.result);
      //       });
      //     }
      //     // 这个时候还没有resolve 和 reject 无法判断是成功还是失败状态 先缓存起来
      //     // 让then里面的函数后执行
      //     // 也就是等resolve 或者 reject 执行完之后在执行then
      //     if (this.status === MyPromise.pending) {
      //       this.onFulFiledQueue.push(onFulFiled);
      //       this.onRejectQueue.push(onReject);
      //     }
      //   }
      // }

			// new MyPromise((resolve, reject) => {
      // 	console.log('1')
      // 	setTimeout(() => {
      // 		resolve('3')
      // 	})
      // }).then(res => {
      // 	console.log(res)
      // })
      // console.log('2') // 1, 2, 3

			// 5.支持链式 返回一个新的promise对象

			class MyPromise {
        static pending = "待定";
        static fullfiled = "成功";
        static reject = "失败";
        constructor(executor) {
          this.status = MyPromise.pending;
          this.result = null;
          this.onFulFiledQueue = [];
          this.onRejectQueue = [];
          // 使用try catch的原因
          //new Promise((resolve, reject) => {
          // 	throw newError('hhh') // 原生promise 会调用then的失败回调
          // })
          try {
            executor(this.resolve.bind(this), this.reject.bind(this));
          } catch (error) {
            this.reject(error);
          }
        }
        resolve(res) {
          // 只能由pending -> 到fullfiled
          setTimeout(() => {
            if (this.status === MyPromise.pending) {
              this.status = MyPromise.fullfiled;
              this.result = res;
              this.onFulFiledQueue.forEach((cb) => cb(res));
            }
          });
        }
        reject(err) {
          // 只能由pending -> 到reject
          setTimeout(() => {
            if (this.status === MyPromise.pending) {
              this.status = MyPromise.reject;
              this.result = err;
              this.onRejectQueue.forEach((cb) => cb(err));
            }
          });
        }
        //
        then(onFulFiled, onReject) {


						// then函数的两个参数 如果不是函数就要被忽略
						onFulFiled = typeof onFulFiled === "function" ? onFulFiled : () => {};
						onReject = typeof onReject === "function" ? onReject : () => {};
						if (this.status === MyPromise.fullfiled) {
							setTimeout(() => {
								onFulFiled(this.result); // onFulFiled 不为函数时需要兼容
							});
						}
						if (this.status === MyPromise.reject) {
							setTimeout(() => {
								onReject(this.result);
							});
						}
						// 这个时候还没有resolve 和 reject 无法判断是成功还是失败状态 先缓存起来
						// 让then里面的函数后执行
						// 也就是等resolve 或者 reject 执行完之后在执行then
						if (this.status === MyPromise.pending) {
							this.onFulFiledQueue.push(onFulFiled);
							this.onRejectQueue.push(onReject);
						}


					return this;
        }
      }

			new MyPromise((resolve, reject) => {
				resolve(1)
			}).then(res => {
				
			}).then(() => {
				console.log('2')
			})
    </script>
```