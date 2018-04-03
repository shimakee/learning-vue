export const sample = { //to be used by local - mixins , create object with same format as vue js
    data: function(){
        return {dataFromMixin:"this is the data from mixin",
        sampleText:"this does not show"} //does not show since overwritten by vue instance with same data name
    },
    filters:{
        countLetters: function(value){ //adding filters as mixins shared and be used separately by any vue instance
            return value +" ("+value.length+")";
        }
    }
};
